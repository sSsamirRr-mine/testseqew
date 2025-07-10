import './me.css'
import React from 'react';
import team from "../../../assets/team.jpg"

const Me = () => (
    <div>
        <div className="about-section">
            <h1>Biz haqimizda</h1>
            <p>
                <span style={{ color: '#e754e8', fontWeight: 'bold' }}>"Fluent Study"</span> - bu innovatsion va sifatli ta'limni taqdim etuvchi zamonaviy o'quv markazi. Bizning maqsadimiz har bir o'quvchiga mustaqil o'rganish va kelajakka ishonch bilan qadam qo'yish imkoniyatini yaratishdir.
            </p>
        </div>
        <div className="choose-section">
            <h2>Nima uchun bizni tanlashadi?</h2>
            <ul>
                <li>✔ Malakali va tajribali o'qituvchilar</li>
                <li>✔ Amaliy va interaktiv darslar</li>
                <li>✔ Yangi texnologiyalar asosida ta'lim</li>
                <li>✔ Shaxsiy yondashuv va rivojlanish</li>
            </ul>
            <br />
            <img
                src={team}
                alt="Fluent Study Team"
                className="team-image"
            />
        </div>
        <div className="future-section">
            <h3>Kelajagingizni biz bilan boshlang!</h3>
            <p>
                <span style={{ color: '#e754e8', fontWeight: 'bold' }}>"Fluent Study"</span> bilan o'z kelajagingni qur !
            </p>
        </div>
    </div>
);

export default Me;