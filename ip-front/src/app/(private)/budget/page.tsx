import PrivateRoute from '@/utils/PrivateRoute';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './budget.css';
import BudgetForm from './budgetForm';
export const metadata: Metadata = {
    title: "budget"
}

interface BudgetProps {
    params: {
        id: string;
    }
}

export default function budget({ params }: BudgetProps){
    const userId = params.id;

    return(
        <>
        <PrivateRoute requiredUserType="CLIENT">
        <header className='header'>
            <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(1000%)'}} /></Link>
        </header>
        <main>
                <BudgetForm userId={userId}/>
        </main>
        </PrivateRoute>
        </>
    )
}