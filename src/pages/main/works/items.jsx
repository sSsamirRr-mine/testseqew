import { useEffect, useState } from "react";
import './items.css';
import getCourses from "../../../param-works.js";

function VideoSection({ videoId }) {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        async function fetchVideo() {
            try {
                const res = await fetch(`https://fastapi-course-app.onrender.com/courses/courses/${videoId}/`);
                const data = await res.json();
                setVideo(data);
            } catch (err) {
                console.error("Failed to fetch video:", err);
            }
        }

        if (videoId) {
            fetchVideo();
        }
    }, [videoId]);

    if (!videoId) return null;

    return (
        <section className="video-section">
            {video ? (
                <div>
                    <h2>{video.name}</h2>
                    <p>{video.description}</p>
                    <div className="video-container">
                        <iframe width="560" height="315" src={video.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            ) : (
                <p>Loading video...</p>
            )}
        </section>
    );
}

export default function Items() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getCourses();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <section className="works">
                <div className="header-cources">
                    <input
                        type="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="kurslarni qidirish..."
                    />
                    <select id="categories">
                        <option value="all" defaultValue>All</option>
                    </select>
                </div>

                <div className="items-container">
                    {filteredItems.map((item) => (
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
                            <button onClick={() => setSelectedVideoId(item.id)}>Kursni ko'rish</button>
                        </div>
                    ))}
                </div>
            </section>

            <VideoSection videoId={selectedVideoId} />
        </>
    );
}