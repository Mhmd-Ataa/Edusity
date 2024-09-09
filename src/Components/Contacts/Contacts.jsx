import React from 'react';
import "./Contacts.css";

const Contacts = () => {



    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a431385e-3ad5-4f40-9010-275385255c30");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }



        return <>
            <div className="contacts px-5 py-5">
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <div className="d-flex align-items-center  subTitle ">
                            <h3>Send Us a Message</h3>
                            <i class="fa-solid fa-envelope-open"></i>
                        </div>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet, quasi saepe esse cum, ab vel repudiandae velit deserunt adipisci iusto delectus consectetur debitis laudantium quia. Doloribus quam sint alias!
                        </p>

                        <ul className="p-0">
                            <li className="mb-3"><i class="fa-solid fa-envelope me-3"></i> Contacts@GreatStack.dev</li>
                            <li className="mb-3"><i class="fa-solid fa-phone-volume me-3"></i>+1 123-456-7890</li>
                            <li className="mb-3"><i class="fa-solid fa-location-dot me-3"></i>Barcelona, Catalonia, Spain  </li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <form onSubmit={onSubmit} >

                            <div className="box d-flex flex-column gap-2 mb-3">
                                <label htmlFor="">Your name</label>
                                <input type="text" name="name" placeholder="Enter your name" required />
                            </div>

                            <div className="box d-flex flex-column gap-2 mb-3">
                                <label htmlFor=""> phone number</label>
                                <input type="tel" name="phone" placeholder="Enter your phone number" required />
                            </div>

                            <div className="box d-flex flex-column gap-2 mb-3">
                                <label htmlFor="">Write your message here</label>
                                <textarea name="message" rows="7" placeholder="Your message" ></textarea>
                            </div>


                            <button type="submit" className="btn px-5 py-2 mb-3">Submit Now</button>
                        </form>
                        <span className="px-3">{result}</span>

                    </div>
                </div>
            </div>

        </>
    }



    export default Contacts;