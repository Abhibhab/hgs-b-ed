import React from 'react';
import rectangle from './../assets/images/Rectangle 404.png';
import studentTeacher from './../assets/images/image 12.png';
import studentTeacher2 from './../assets/images/image 13.png';

const AboutInstitution = () => {
    return (
        <div className='margin-for-institute ml-[80px] mr-[80px]'>
                        <div>
                            <div className='mt-8 mb-8'>
                                <h1 className='welcome'>Welcome to J.N Kaul Institute of Education</h1>
                                <img src={rectangle} alt="" />
                            </div>

                            <div class="mb-[50px]">
                                <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                                    <img src={studentTeacher} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                                    <div className='ml-6'>
                                        <h1 className='about-sos'>About SOS</h1>
                                        <p className='sos-para'>
                                            SOS Children’s Village of India is an independent, non- governmental, social development organization that provides family based care for children. The first SOS Children’s Village of India was founded by Hermann Gmiener in 1949 in Imst, Austria. He was committed to helping children in need, children who had lost their homes, their society and their families as a result of the Second World War. More than 7000 children and young people attend SOS Hermann Gmeiner Schools, SOS Kindergartens and SOS Vocational Training Centers. Moreover SOS Children’s Villages provides families with material, psychological and social support. In times of crisis and disaster, SOS Children’s Villages helps through emergency relief programes. SOS Children's Village Bhimtal was built on the former property of a Maharaja, around 300 km north of New Delhi, in the foothills of the Himalayan Mountains.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-[50px]">
                                <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                                    <img src={studentTeacher2} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                                    <div className='ml-6'>
                                        <h1 className='about-sos'>About J.N. Kaul Institute of Education</h1>
                                        <p className='sos-para'>
                                            J. N. Kaul institute of Education, Bhimtal is a Community project of SOS Children’s Village of India. The Institute came into existence by the sincere and praiseworthy efforts of Padamshree Shri J. N. Kaul, President SOS Children’s Village of India in the year 2004. It is approved by NCTE and is affiliated to Kumaun University, Nainital. The University has been awarded grade ‘A’ by the National Assessment and Accreditation Council (NAAC). Since there was no B.Ed. College anywhere in the adjoining areas so as a need to fulfill the requirements of students who wish to opt for teaching as a profession & career, J. N. Kaul Institute of education was opened in 2005.

                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-[50px]">
                                <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                                    <img src={studentTeacher2} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                                    <div className='ml-6'>
                                        <h1 className='about-sos'>ABOUT BHIMTAL</h1>
                                        <p className='sos-para'>
                                            SOS Children's Village Bhimtal is situated in a beautiful wooded landscape with many hills and lakes. The town of Bhimtal is more popularly known for its unique feature of island in the Lake. Bhimtal which falls  under Nainital District of Uttarakhand is about 22 kms away from here. The magnificent lake of this town is situated at an altitude of 1371.6 metres above sea level.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-[50px]">
                                <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                                    <img src={studentTeacher2} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                                    <div className='ml-6'>
                                        <h1 className='about-sos'>VISION & MISSION</h1>
                                        <p className='sos-para'>
                                            Vision of the institute is to bring forth dedicated teachers who can inculcate values and norms of a civil society in our younger generation, apart from imparting knowledge and skills as updated in the new millennium.
                                            Mission of the institute is to build and nurture a new generation of well-rounded professionals who can work as positive charge agents in the new millennium by helping the new education system to attain and sustain global leadership. It will be our endeavor to assimilate and disseminate practical knowledge to future professionals and to encourage their understanding of strategic perception to fulfill the mission of the organization in the fast changing global learning environment and to make significant contribution by providing an opportunity to the deserving candidates of society to have world class professional education and to inculcate among them the feeling of fraternity and patriotism.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default AboutInstitution;