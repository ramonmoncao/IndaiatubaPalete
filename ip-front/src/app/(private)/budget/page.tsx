import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './budget.css';
import BudgetForm from './budgetForm';
export const metadata: Metadata = {
    title: "budget"
}
export default function budget(){

    return(
        <>
        <header className='header'>
            <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(1000%)'}} /></Link>
        </header>
        <main>
                <BudgetForm/>
        </main>
        </>
    )
}