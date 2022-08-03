import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutUs from './../assets/images/alumni-cover.JPG'
import teacher1 from './../assets/images/alumni-teacher (1).png'
import teacher2 from './../assets/images/alumni-teacher (2).png'
import teacher3 from './../assets/images/alumni-teacher (3).png'
import teacher4 from './../assets/images/alumni-teacher (4).png'
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import sosChildrenVillage from './../assets/images/sos_logo 3.png';

const Alumni = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
    const navigate = useNavigate();
    const handleOverView = () => {
        setOverview[1]('setOverview')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        setShowNavbar[1](false);
        navigate('/')
    }
    const handleLeadership = () => {
        setShowNavbar[1](true)
        setOverview[1]('')
        setLidership[1]('setLidership')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        navigate('/leadership')
    }
    const handleProgramsOffered = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('setProgramsOffered')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true);
        setContactUs[1]('')
        navigate('/programesOffered')
    }
    const handleAlumni = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('setAlumni')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true);
        setContactUs[1]('')
        navigate('/alumni')
    }
    const handleAdmission = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('setAdmission[1]')
        setShowNavbar[1](true);
        setFacultiStaff[1]('')
        setContactUs[1]('')
        navigate('/admission')
    }
    const handleFaculty = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](true);
        setAdmission[1]('')
        setFacultiStaff[1]('setFacultiStaff[1]')
        setContactUs[1]('')
        navigate('/faculty')
    }
    const handleContact = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](false);
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('setContactUs[1]')
        navigate('/contact')
    }
    return (
        <div>
            <img  onClick={handleOverView} className='w-20 lg:w-48 md:24 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
            <img className='w-full' src={aboutUs} alt="" />
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='flex justify-center mt-6 ml-6 md:grid lg:grid'>
                    <div>
                    <div className='leadership'>
                        <p onClick={handleOverView} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Overview</p>
                        <p onClick={handleLeadership} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Leadership</p>
                        <p onClick={handleProgramsOffered} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Programs Offered</p>
                        <p onClick={handleAlumni} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Alumni</p>
                        <p onClick={handleAdmission} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Admission</p>
                        <p onClick={handleFaculty} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Faculty & Staff</p>
                        <p onClick={handleContact} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Contact Us</p>
                    </div>


                    <div className='leadership-info'>
                        <div className='flex justify-center'>
                            <img className='h-8 mr-4' src={location} alt="" />
                            <p className='flex forTextHover updated-font-family'>J N Kaul Institute of Education Bhimtal SOS Complex, Tallital Bhimtal Nainital, Uttrakhand, India, 263136</p>
                        </div>
                        <div className='flex items-center justify-center my-4 mr-6'>
                            <img className='mr-4' src={email} alt="" />
                            <p className='flex forTextHover updated-font-family'>Principal.bhimtalbed@sos<br />cvindia.org </p>
                        </div>
                        <div className='flex'>
                            <img className='mr-4' src={phone} alt="" />
                            <p className='flex forTextHover updated-font-family'>05942-247999</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <div class=" mt-6 mb-[50px] ml-6 mr-6">
                        <h1 className='mt-2 mb-8 text-4xl leadership-heading updated-font-family'>Alumni</h1>
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <img src={teacher1} class="teachers-picture  picture-shadow" alt='' />
                            <div className='ml-6'>
                                <h1 className='mb-2 text-2xl font-bold updated-font-family'>Shraddha Singh (Batch -2017-19)</h1>
                                <p className='mb-2 text-xl updated-font-family'>Teacher</p>
                                <p className='mb-2 text-xl updated-font-family'>Jawahar Navoday Vidyalaya,Pota (Rajasthan)</p>
                                <p className='mt-2 updated-font-family'>
                                    I have not only witnessed, but also experienced the bliss, with which this wonderful institution nurtures an individual. Each and every block of the institution act as a stepping stone for us, thus augmenting each and every one of their qualities- be it academic prowess in securing a high percentage or versatility on the stage and games field The institution under the able guidance of our Principal ma’am has the embellishment of a caring, loving and learning atmosphere and that makes all the difference. And today I’m working in Sherwood College, Nainital as the coordinator of English Department.
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* 2nd one */}
                    <div class=" mt-2 mb-[50px] ml-6 mr-6">
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <div className=''>
                                <h1 className='mb-2 text-2xl font-bold updated-font-family'>Pooja Kuriya (Batch -2017-19)</h1>
                                <p className='mb-2 text-xl updated-font-family'>Principal</p>
                                <p className='mb-2 text-xl updated-font-family'>Mehra Public School Ramnagar</p>
                                <p className='mr-6 updated-font-family'>
                                    I’m amongst the many students of the institution whose life changed not only academically but also mentally and emotionally after joining the Institute. The college focuses not only on making the finest of all teachers but also good humans and citizens. It’s the continuous toiling of the Principal and staff of the college that it has become one of the best and most revered colleges of education in the state. What I’m today, I totally owe to the hard work and values instilled by the institute in me, I m working as Lecturer English, Uttarakhand Education Department.
                                </p>
                            </div>
                            <img src={teacher2} class="teachers-picture  picture-shadow" alt='' />
                        </div>
                        
                    </div>


                    {/* 3rd */}
                    <div class=" mt-2 mb-[50px] ml-6 mr-6">
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <img src={teacher3} class="teachers-picture  picture-shadow" alt='' />
                            <div className='ml-6'>
                                <h1 className='mb-2 text-2xl font-bold updated-font-family'>Gauhar Fatima (Batch -2013-14) </h1>
                                <p className='mb-2 text-xl updated-font-family'>Assistant Professor (Through UKPSC)</p>
                                <p className='mb-2 text-xl updated-font-family'>SOS Children’s Villages of India</p>
                                <p className='mt-2 updated-font-family'>
                                    Certain milestones bring drastic changes in your life, coming to J. N. Kaul was one of them. The Institution didn't just work on our academics but ensured our participation in various co-curricular activities and community services which can prepare a teacher to cater the needs of their prospective career. Also we got ample of opportunities to use latest technologies which enabled us to stand with the ever-changing modern world and improve the teaching-learning process.
                                    As I joined JNKIE a completely different journey started because It was not a regular college which generally focuses on the academics and neglects the all round development of the students. From the first week of my admission I had to participate in the varied activities which I was not comfortable earlier on. But gradually I saw the difference in me and my friends we were more confident and active which is an relevant for every individual  to succeed in life, meanwhile I  qualified the NET/JRF examination In Education with the utmost support and guidance of the Principal and staff and right now doing my Ph. D. course work.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* 4th */}
                    <div class=" mt-2 mb-[50px] ml-6 mr-6">
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <div className='mr-6'>
                                <h1 className='mb-2 text-2xl font-bold updated-font-family'>Himanshu Rawat (Batch -2015-17)</h1>
                                <p className='mb-2 text-xl updated-font-family'>Teacher</p>
                                <p className='mb-2 text-xl updated-font-family'>SOS Children’s Villages of India</p>
                                <p className='mt-2 updated-font-family'>
                                    It had  been a while  for  me after  leaving formal education  but coming  here just  not made  me a disciplined   person but  also motivated  me  to  explore  my capabilities, skills  and  talents. My   perception  towards the teaching profession especially with the experience during my practice teaching.
                                </p>
                            </div>
                            <img src={teacher4} class="teachers-picture  picture-shadow" alt='' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Alumni;