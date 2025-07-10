import './footer.css';
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer>
            <div className="top-footer">
                <div>
                    <span className="logo">
                        <img src={logo} alt="" />
                        <h2>Fluent Study</h2>
                    </span>
                    <p>
                        Zamonaviy ta'lim platformasi orqali bilimingizni oshiring va kelajakni yarating
                    </p>
                </div>
                <div>
                    <h2>
                        Texkor havolalar
                    </h2>
                    <p>
                        Bosh sahifa<br />
                        Kurslar<br />
                        Testlar<br />
                        Blog<br />
                        Biz haqimizda
                    </p>
                </div>
                <div>
                    <h2>
                        Bog'lanish
                    </h2>
                    <p>
                        Toshkent sh, Amir Temur ko'chasi, 108-uy<br />
                        +998 90 123 45 67<br />
                        info@eduplatform.uz
                    </p>
                </div>
                <div>
                    <h2>Yangiliklardan xabardor bo‘ling</h2>
                    <p>
                        Yangi kurslar va imkoniyatlar haqida birinchilardan bo‘lib xabardor bo‘ling
                    </p>
                    <input
                        type="email"
                        placeholder="Email manzilingiz"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginBottom: '8px',
                            borderRadius: '4px',
                            border: 'none',
                            background: '#232336',
                            color: '#fff'
                        }}
                    />
                    <button
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '4px',
                            border: 'none',
                            background: '#a78bfa',
                            color: '#fff',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Obuna bo‘lish
                    </button>
                </div>
            </div>

            <div className="bottom-footer">
                <p>2025 EduPlatform. Barcha huquqlar himoyalangan.</p>
                <div><a href="#">Foydalanish shartlari</a> <a href="#">Maxviylik siyasati</a></div>
            </div>

        </footer >
    )
}