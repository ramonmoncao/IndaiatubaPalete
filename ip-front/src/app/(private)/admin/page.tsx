"use client"
import PrivateRoute from '@/utils/PrivateRoute';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './admin.css';

export default function AdminPage() {

    const router = useRouter();
    const handleSubmitProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/products');
    }
    const handleSubmitBudget = async (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/budgetmanagment');
    }
    return (
        <>
        <PrivateRoute requiredUserType="ADMIN">
            <header className='header'>
                <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{ filter: 'brightness(1000%)' }} /></Link>
            </header>
            <main>
                <section id="admin">
                    <div id="admin-div">
                        <div className="boxadm">
                            <h1>Bem vindo admin</h1>
                            <button className='sendbtnadm' onClick={handleSubmitProduct}>GERENCIAR PRODUTOS</button>
                            <button className="sendbtnadm" onClick={handleSubmitBudget}> VER ORÇAMENTOS</button>
                        </div>
                    </div>
                </section>
            </main>
        </PrivateRoute>
        </>
    )
}