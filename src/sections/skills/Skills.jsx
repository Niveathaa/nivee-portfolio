import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p>Demonstrated consistent dedication and disciplined self-study to develop a strong grasp of these technologies.</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services