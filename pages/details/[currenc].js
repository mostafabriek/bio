import { useEffect, useState } from 'react' 
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [amount , setamount] = useState(1);
  const [currencyfrom , setcurrencyfrom] = useState('EUR');
  const [currencyto , setcurrencyto] = useState('USD');
  const [currencytoamount , setcurrencytoamount] = useState(0.11);


  const [currencyfromarray , setcurrencyfromarray] = useState();
  const [currencytoarray , setcurrencytoarray] = useState();

  useEffect(() => {
    getexchangeratebybase('EUR')
  }, []);

  // async function getexchangerate() {
  //   let result = await fetch('http://data.fixer.io/api/latest?access_key=7867bcc380b420c2902ff325c2799ec5', {
  //     method: 'GET',
  //   }).catch((e) => console.log(e))
  //   result = await result.json()
  //   console.log(result)
  //   setcurrencyfromarray(result.rates)
  //   setcurrencytoarray(result.rates)
  //   console.log(currencyfromarray)
  //   console.log(currencytoarray)
  //   currencyfromarray.forEach(element => {
  //     if(Object.keys(element) == 'USD'){
  //       console.log(element)
  //     }
  //   });
    
  // }


  async function getexchangeratebybase(base) {
    let result = await fetch('http://data.fixer.io/api/latest?access_key=7867bcc380b420c2902ff325c2799ec5&base='+base, {
      method: 'GET',
    }).catch((e) => console.log(e))

    // base + amount 
    // to get another currency rates 

    result = await result.json()
    console.log(result)
    setcurrencyfromarray(Object.keys(result.rates))
    setcurrencytoarray(Object.keys(result.rates))
    console.log(currencyfromarray)
    console.log(currencytoarray)
  }

  return (
   <>
      <div className='exchanger'>
        <div className='header'>
            <Link href='/'><span className='logo'></span></Link> 
            <div className='navbar'>
                <Link href="/details/EUR-USD">EUR-USD Details</Link>
                <Link href="/details/EUR-GBP">EUR-GBP Details</Link>
            </div>
        </div>
        <div className='converter'>
            <div className='amount'>
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" value={amount} onChange={(e)=>{setamount(e.target.value)}} name="amount" />
              
            </div>
           
            <div className='calc'>
            <div className='from'>
              <label htmlFor="currencyFrom">From:</label>
              <select name="currencyFrom" className='sectionselect' id="currencyFrom">
                {currencyfromarray?.map(function (currfrom) {
                    return (
                      <option value={currfrom}>{currfrom}</option>
                    )
                  })}
              </select>
            </div>
            <span className='convimg'></span>
            <div className='to'>
              <label htmlFor="currencyto">to:</label>
                <select name="currencyto" className='sectionselect' id="currencyto">
                {currencyfromarray?.map(function (currfrom) {
                      return (
                        <option value={currfrom}>{currfrom}</option>
                      )
                    })}     
                </select>
            </div>
         </div>
        </div>
        <div className='converter'>
          <span className='btnconvert'>convert</span>
        </div>
        <div className='converter'>
            <div className='resultforone'>
                1 {currencyfrom} = {currencytoamount} {currencyto}
            </div>
          
            <div className='convresult'>{ 
              // result of converting 
              500 + ' USD'
              }</div>
        </div>
        <div className='cardsgrid'>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
              <div className='gridin'>500 USD </div>
        </div>
      </div>
   </>
  )
}
