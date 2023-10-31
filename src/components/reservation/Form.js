import React, {useState} from 'react'
import './Form.css'
import Image1 from '../../assets/deal1.jpg'

function Form() {
    const [value, setvalue] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        people: ""
    })

    console.log(value.name);
    console.log(value.email);
    console.log(value.date);
    console.log(value.time);
    console.log(value.people);

    const nameChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, name: event.target.value}
        })
    }

    const emailChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, email: event.target.value}
        })
    }

    const dateChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, date: event.target.value}
        })
    }

    const timeChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, time: event.target.value}
        })
    }

    const peopleChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, people: event.target.value}
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        alert('You have submitted successfully');
    };



    return (
        <div className="reservation__form">
            <div className="reservation__content">
                <h3>Reservation</h3>
                <h1>Book Your Table</h1>
            </div>

            <div className="form__container">
                <form className="container-form" onSubmit={clickSubmit}>
                    <div className="left__form">
                        <input type="text" name="name" id="name" onChange={nameChange} required placeholder="Name" value={value.name} />
                        <input type="date" name="date" id="date" onChange={dateChange} required placeholder="Date" value={value.date} />
                        <input type="text" name="people" id="people" onChange={peopleChange} required placeholder="people" value={value.people} />
                    </div>
                    <div className="right__form">
                        <input type="email" name="email" id="email" onChange={emailChange} required placeholder="Email" value={value.email} />
                        <input type="time" name="time" id="time" onChange={timeChange} required placeholder="Time" value={value.time} />
                        <button className="submit">find a table</button>
                    </div>
                </form>
            </div>
            <div></div>
            <div></div>
            <div id="store"><h1>Find Our Store</h1></div>
            <div id="map">
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55015.777993765216!2d76.55227738257807!3d30.478990096991332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc7c202e6489%3A0xf2b1d67562f68349!2sRajpura%2C%20Punjab%20140401!5e0!3m2!1sen!2sin!4v1698231012592!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                <iframe width="560" height="450" src="https://www.youtube.com/embed/RR00kuvYIug?si=AvWIuHFGzDFMGQJa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    
    )
}

export default Form
