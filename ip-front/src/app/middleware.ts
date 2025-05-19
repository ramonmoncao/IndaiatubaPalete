import { parseJwt } from '@/utils/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const protectedPaths = ['/products', '/budget'];
    const authPaths = ['/login'];

    if (protectedPaths.some(p => path.startsWith(p))) {
        const token = request.cookies.get(' -token')?.value;

        if (!token) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', path);
            return NextResponse.redirect(loginUrl);
        }

        try {
            const decoded = parseJwt(token);
            
            if (decoded.exp && Date.now() >= decoded.exp * 1000) {
                throw new Error('Token expirado');
            }

            if (path.startsWith('/products') && decoded.UserType !== 'ADMIN') {
                return NextResponse.redirect(new URL('/home', request.url));
            }

            if (path.startsWith('/budget') && decoded.UserType !== 'CLIENT') {
                return NextResponse.redirect(new URL('/home', request.url));
            }

        } catch (error) {
            console.log(error)
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', path);
            const response = NextResponse.redirect(loginUrl);
            response.cookies.delete('auth-token');
            return response;
        }
    }

    if (authPaths.includes(path)) {
        const token = request.cookies.get('auth-token')?.value;
        
        if (token) {
            try {
                const decoded = parseJwt(token);
                const targetPath = decoded.UserType === 'ADMIN' ? '/products' : '/budget';
                return NextResponse.redirect(new URL(targetPath, request.url));
            } catch {
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};