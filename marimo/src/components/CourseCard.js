import './CourseCard.css'

function CourseCard({
    img,
    tags,
    title,
    startPrice,
    types
}) {

    return (
        <div className="CourseCard">
            <div className="cover">
                <img className="top loaded" alt="" src={img} loading="lazy" data-ll-status="loaded" />
            </div>
            <div className="info">
                <ul className="tags">
                    {tags.map((item, i) => (
                        <li key={i} className="tag">{item}</li>
                    ))}
                </ul>

                <h4 className="name">{title}</h4>
                {/* toLocaleString : 해당 국가 숫자 타입으로 변환*/}
                <p className="prices">{startPrice.toLocaleString()}원부터</p>

                <ul className="types">
                    {types.map((item, i) => (
                        <li key={i} className="types">
                            {item}
                        </li>
                    ))}
                </ul>


            </div>

        </div>
    )
}

export default CourseCard