import { useEffect, useState } from "react";
import getCourses from "../../../param-works.js"; // импортируем функцию
import './home.css';


function setVideoCourse(id) {
    window.location.href = `/video/${id}`
    setVideo(id)
}

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await getCourses(); // вызываем функцию
            setItems(data); // сохраняем в состояние
        }
        loadData();
    }, []);

    return (
        <>
            <div className="home">

                <section className="sectionOne" >
                    <div className="left">
                        <h1>
                            Bilimingizni oshiring,
                            kelajakni yarating
                        </h1>
                        <p>
                            Zamonaviy kurslar va interaktiv testlar orqali o'z
                            bilimingizni yangi bosqichga ko'taring
                        </p>
                        <button>
                            Kurslarni ko'rish &rarr;
                        </button>
                    </div>
                    <div className='right-img'></div>
                </section>

            </div>


            <section className='section-two-home'>
                <h2>Kurslar</h2>
                <div className="items-container">
                    {Array.isArray(items) && items.map((item) => (
                        <div className="item" key={item.id}>
                            <div
                                className="img"
                                style={{
                                    backgroundImage: `url(https://fastapi-course-app.onrender.com${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '150px'
                                }}
                            ></div>

                            <div className="IT-course">IT course</div>
                            <h2 className="Name">{item.name}</h2>
                            <p>{item.description}</p>
                            <div className="views">
                                <span className="stars"></span>
                                <span className="viewse"></span>
                            </div>
                            <button onClick={() => setVideoCourse(item.id)}>Kursni ko'rish</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className='staticks'>
                <h2>Statistika </h2>
                <div className="statickes">
                    <div className="statich">
                        <img width='40px' height='40px' src="https://www.svgrepo.com/show/19233/profile-users-group-silhouette.svg" alt="" />
                        <h3>10 000+</h3>
                        <p>Foydalanuvchilar</p>
                    </div>
                    <div className="statich">
                        <img width='40px' height='40px' src="https://cdn.iconscout.com/icon/free/png-256/free-book-emoji-icon-download-in-svg-png-gif-file-formats--knowledge-study-100-pack-miscellaneous-icons-450385.png" alt="" />
                        <h3>200+</h3>
                        <p>Kurslar</p>
                    </div>
                    <div className="statich">
                        <img width='40px' height='40px' src="https://cdn-icons-png.freepik.com/256/16877/16877601.png?semt=ais_hybrid" alt="" />
                        <h3>5 000+</h3>
                        <p>Testlar</p>
                    </div>
                </div>
            </section>

            <section className='section-four'>
                <h2>Foydalanuvchilar sharhlari</h2>
                <div className="comments">
                    <div className="comment">
                        <span width='80px' />
                        <p>
                            "Bu platforma orqali matematika fanidan bilimlarimni sezilarli darajada oshirdim. Testlar juda foydali!"
                        </p>
                        <div className="profil-comment">
                            {/* <img src="" alt="" /> */}
                            <div>
                                <h3>Aziz Karimov</h3>
                                <p>Talaba</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <span width='80px' />
                        <p>
                            "O'quvchilarim uchun ajoyib resurs. Kurslar sifati va tushuntirish oson."
                        </p>
                        <div className="profil-comment">
                            {/* <img src="" alt="" /> */}
                            <div>
                                <h3>Nilufar Sobirova</h3>
                                <p>O'qutuvchi</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <span width='80px' />
                        <p>
                            "Dasturlash kurslarini tugatib, ishga joylashishda katta yordam berdi. Rahmat!"
                        </p>
                        <div className="profil-comment">
                            {/* <img src="" alt="" /> */}
                            <div>
                                <h3>Jasur Toshmatov</h3>
                                <p>IT mutahasisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='section-five'>
                <h2>Qanday Ishlaydi</h2>
                <div className="what-works">
                    <div className="what-work">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Kursni tanlang" width="48" height="48" />
                        <h3>Kursni tanlang</h3>
                        <p>O'zingizga mos kursni tanlang va ro'yxatdan o'ting</p>
                    </div>
                    <div className="what-work">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="Materialni o'rganing" width="48" height="48" />
                        <h3>Materialni o'rganing</h3>
                        <p>Video darslar va o'quv materiallarini o'rganing</p>
                    </div>
                    <div className="what-work">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Testlarni yeching" width="48" height="48" />
                        <h3>Testlarni yeching</h3>
                        <p>Bilimingizni mustahkamlash uchun testlarni yeching</p>
                    </div>
                    <div className="what-work">
                        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Sertifikat oling" width="48" height="48" />
                        <h3>Sertifikat oling</h3>
                        <p>Kursni muvaffaqiyatli tugatib, sertifikat oling</p>
                    </div>
                </div>
            </section>
        </>)
}