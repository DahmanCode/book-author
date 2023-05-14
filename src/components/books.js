import React, {useEffect} from "react";
import data from "../data/books.json";

const Books = ({ isBg }) => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel")

    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
      })
    })

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove('active')
      })
    }
  }, [])

  const { booksv2 } = data;
  return (
    <section 
     id="books"
     className={`section-padding ${isBg === "yes" ? "bg-one" : ""}`}
     >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{booksv2.title}</span>
              <h2 className='display-6'>{booksv2.subtitle}</h2>
              <div className='section-divider divider-traingle'></div>
            </div>
          </div>
        </div>

        <div
          className="chapter__preview2"
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay="300"
        >
          <div className="chapter__preview2-content">
            <div className="chapter__preview2-container">
              {booksv2.booksItem.map((data, i) => (
                <div
                  key={i}
                  className={`panel cover-panel ${i === 0 ? "active" : ""}`}
                  style={{backgroundImage: `url(${data.image})`}}
                  data-aos='fade-right'
                  data-aos-duration='1000'
                  data-aos-delay={(i + 2) * 50}
                >
                  <h3>{data.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Books;