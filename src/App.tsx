import './App.css'
import { motion } from "framer-motion"; 
import Navbar from './components/Navbar/Navbar'
import Leds from './components/Leds/Leds';

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex flex-col justify-start items-center bg-slate-900 min-h-screen pt-15 pb-12'>
        <div className="pt-7 md:px-20 px-5 flex flex-col  gap-7">
        {/* Greeting */}
        <motion.div className=" flex items-center gap-2 bg-slate-800 rounded-2xl md:py-8 py-5 md:px-10 px-5 shadow"
          initial={{ opacity: 0, y: 20 }}  
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true, amount: 0.2 }}  
          transition={{ duration: 0.4, ease: "easeOut" }}  
        >
          <p className="flex flex-col md:text-4xl text-2xl font-bold md:w-150 w-auto text-center ">
            <span className=''>Signification des voyants lumineux de votre <span className='text-orange-500'>OlenMove</span> 🔋</span>
          </p>
        </motion.div> 
        {/* Alarm card - Green */}
        <motion.div className="flex shadow rounded-2xl"
          initial={{ opacity: 0, y: 20 }}  
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true, amount: 0.2 }}  
          transition={{ duration: 0.4, ease: "easeOut" }} 
        >
          <span className="bg-green-600 w-3 rounded-l-2xl">
          </span>
          <div className="flex flex-col gap-8 w-full bg-slate-800 rounded-r-2xl md:py-8 py-5 md:px-10 px-5">
            <h2 className='md:text-2xl text-xl'>✅ État Normal</h2>
            <div className='flex flex-col gap-3'>
              <Leds stateLed1={1} stateLed2={0} stateLed3={0} text='Système OK'/>
              <Leds stateLed1={2} stateLed2={1} stateLed3={0} text='Démarrage en cours (patientez 3 min)'/>
            </div>
          </div>
        </motion.div>
        {/* Alarm card - Orange */}
        <motion.div className="flex shadow rounded-2xl"
          initial={{ opacity: 0, y: 20 }}  
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true, amount: 0.2 }}  
          transition={{ duration: 0.4, ease: "easeOut" }} 
        >
          <span className="bg-orange-600 w-3 rounded-l-2xl">
          </span>
          <div className="flex flex-col gap-8 w-full bg-slate-800 rounded-r-2xl md:py-8 py-5 md:px-10 px-5">
            <h2 className='md:text-2xl text-xl'>⚠️ Avertissements</h2>
            <div className='flex flex-col gap-3'>
              <Leds stateLed1={2} stateLed2={2} stateLed3={0} text='Avertissement (non critique)'/>
              <Leds stateLed1={1} stateLed2={1} stateLed3={0} text='Préchauffage en cours (patientez)'/>
              <Leds stateLed1={1} stateLed2={2} stateLed3={2} text='Attention inversion de phases'/>
              <Leds stateLed1={1} stateLed2={2} stateLed3={0} text='État de charge (SoC) < 10%'/>
              <Leds stateLed1={1} stateLed2={2} stateLed3={0} text='État de charge (SoC) < 5% (décharge impossible)'/>
              <Leds stateLed1={0} stateLed2={2} stateLed3={2} text='Défaillance du système de conversion'/>
              <Leds stateLed1={0} stateLed2={2} stateLed3={0} text='Merlin a perdu la communication avec le contrôleur onduleur '/>
            </div>
          </div>
        </motion.div>
        {/* Alarm card - Red */}
        <motion.div className="flex shadow rounded-2xl"
          initial={{ opacity: 0, y: 20 }}  
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true, amount: 0.2 }}  
          transition={{ duration: 0.4, ease: "easeOut" }} 
        >
          <span className="bg-red-600 w-3 rounded-l-2xl">
          </span>
          <div className="flex flex-col gap-8 w-full bg-slate-800 rounded-r-2xl md:py-8 py-5 md:px-10 px-5">
            <h2 className='md:text-2xl text-xl'>🚨 Alertes Critiques</h2>
            <div className='flex flex-col gap-3'>
              <Leds stateLed1={0} stateLed2={0} stateLed3={1} text='Erreur critique (éteindre le système et contacter votre fournisseur)'/>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </>
  )
}

export default App
