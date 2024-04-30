import styles from '../../styles/Pages.module.css';
import { useState } from 'react';
import CopyToClipboardButton from '../CopyToClipboardButton';


export default function Index({ navigateToPage }) {
  const [selectedOption,setSelectedOption]=useState(0)
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [type,setType]=useState('HrMail')
  const [data,setData]=useState('')

  const options = [
    {
      title: "Generate Hr Mail",
      type:"HrMail",
    },
    {
      title: "Generate Job Message",
      type:"JobMessage",
    },
    {
      title: "Generate Job Referal",
      type:"JobReferal",
    },
    // {
    //   title: "Generate Cover Letter",
    //   type:"CoverLetter",

    // },
    // {
    //   title: "Generate Causal Connection",
    //   type:"CausalConnection",

    // },
    // {
    //   title: "Generate Job Connection",
    //   type:"JobConnection",

    // },
  ];


  const handleOption=(id,type)=>{
    setSelectedOption(id)
    setType(type)
  }

  function handleOnChange(e, setState) {
    const { name, value } = e.target;
    // setState({[name]: value});
    setState(e.target.value);
  }


const handleSubmit=async()=>{
  // await axios.post('/api/chat_api',{...name,...position,...company,type}).then((response)=>{
  //   console.log(response.data.message)
  //   setData(response.data.message)
  // })
  if(type==='HrMail'){
    setData(`
    Subject: Application for ${position?position:'MERN-Stack'} Developer Position - Vipul Jangid
    
    Dear Hiring Manager,
    
    I'm reaching out to express my interest in the ${position?position:'MERN-Stack'} Developer role at ${company}. With over a year of experience in React, Node.js, and MongoDB, I'm keen to contribute to your team's success.
    
    In my previous roles, I've built and deployed various web applications using the ${position?position:'MERN-Stack'}, focusing on responsive UIs and scalable backend solutions.
    
    I'm excited about the opportunity to bring my skills to ${company} and am available for an interview at your convenience. Please find my resume attached.
    
    Thank you for considering my application.
    
    Best regards,
    Vipul Jangid
    vipulsuthar011@gmail.com`)
  }
  else if (type==='JobMessage'){
    setData(`Dear ${name},

    I hope you're doing well.
    
    I'm reaching out to inquire if there are any openings for ${position} developers in your company. I'm eager to apply my skills and experience to a suitable role.
    
    Looking forward to your response.
    
    Best regards,
    Vipul Jangid
    vipulsuthar011@gmail.com`)
  }
  else if (type==='JobReferal'){
    setData(`Excited to Explore Opportunities at ${company?company: ' your company'}

    Hi ${name},
    
    Hope you're doing well! I noticed your current role at ${company} and I'm excited to explore opportunities there relevant to my background. 
    
    I have experience in web development with Next.js, React.js, Node.js, and JavaScript. 
    
    I believe my skills would enable me to contribute positively towards the company mission of product development and technical consulting. 
    
    Are you currently accepting applicants? Thank you for your time.
    
    Sincerely,
    
    Vipul Jangid
    vipulsuthar011@gmail.com
      `)
  }
}
  



  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Choose Options:</h1>

        <p className="mt-4 mb-2">
          Chosse below Options for specific task:-
        </p>
        <div className='grid grid-cols-2 gap-2 mx-4 mt-2 mb-6'>
          <input className=' rounded-md px-4 py-2 text-black' placeholder='Name' name="name" onChange={(e)=>handleOnChange(e,setName)} />
          <input className=' rounded-md px-4 py-2 text-black' placeholder='Position' name="position" onChange={(e)=>handleOnChange(e,setPosition)} />
          <input className=' rounded-md px-4 py-2 text-black' placeholder='Company' name="company`" onChange={(e)=>handleOnChange(e,setCompany)} />
          {/* <input className=' rounded-md px-4 py-2 text-black' placeholder='Name' name="name" onChange={(e)=>handleOnChange(e,setName)} /> */}
        </div>
        {console.log(company,position,name)}

        <div>
          {options?.map((ele, index) => (
            <div key={index} className={`bg-[#fafafa] text-[grey] my-2 py-3 px-2 rounded focus:bg-[green] cursor-pointer ${selectedOption===index?'bg-[green] text-white transition-all ':""}`} onClick={()=>handleOption(index,ele?.type)}>{ele?.title}</div>
          ))}
        </div>
       
       <div className='bg-[darkGreen] px-4 py-2 rounded-lg font-semibold cursor-pointer' onClick={handleSubmit}>Submit</div>

        {/* {console.log(name)} */}
        {/* <h1 className={styles.code}>Index Page ./components/Index/index.js</h1> */}
        {/* <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p> */}
      </main>
       <div className='text-left'>Output:     <CopyToClipboardButton text={data} /></div>
       <textarea className='w-full text-black rounded-md focus:border-0' rows={7} value={data}/>
   
    </div>
  );
}
