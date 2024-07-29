import React, { useState } from 'react'
import styles from './contact.module.css'
import { TextField, Button, IconButton, Snackbar } from '@mui/material'
import axios from 'axios'

const ContactPage = () => {

    const [firstName, setName] = useState('')
    const [emailAddres, setEmail] = useState('')
    const [response, setResponse] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
            </IconButton>
        </React.Fragment>
    );

    const addUser = (e) => {
        e.preventDefault()

        const newUser = {
            firstName,
            emailAddres,
            password
        }

        axios.post("http://localhost:3001/users", newUser)
            .then(res => {
                setName('')
                setEmail('')
                setPassword('')
                setOpen(true)
                setResponse("You're registered")
            })
            .catch(err => {
                setOpen(true)
                setResponse(err.response)
            })
    }

    return (
        <div className='container'>
            <div className={styles.contact}>
                <div className={styles.contactInfo}>
                    <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className={styles.contactImg}>
                    <img src="./images/Vector(1).png" alt="" />
                </div>
                <div className={styles.contactRight}>
                    <div className={styles.rightInfo}>
                        <h4>Follow us</h4>
                    </div>
                    <div className={styles.rightImg}> 
                        <img src="./images/Group(2).png" alt="" />
                        <a style={{ color: "white", fontSize: "20px", fontWeight: "300", paddingLeft: "10px" }} href="tel:+916 4444 5555 ">+916 4444 5555</a>
                    </div>
                </div>
            </div>
            <div className={styles.contactRegister}>
                <div className={styles.registerInfo}>
                    <h3>Say hello</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing .</p>
                </div>
                <div className={styles.contactRegister}>
                    <form onSubmit={addUser}>
                        <TextField
                            style={{ background: "white", borderRadius: "15px" }}
                            id="outlined-basic"
                            label="First Name..."
                            variant="outlined"
                            value={firstName}
                            onChange={(e) => setName(e.target.velue)}
                        />

                        <TextField
                            style={{ background: "white", borderRadius: "15px" }}
                            id="outlined-basic"
                            label="E-mail Addres..."
                            variant="outlined"
                            value={emailAddres}
                            onChange={(e) => setEmail(e.target.velue)}
                        />

                        <TextField
                            style={{ background: "white", borderRadius: "15px" }}
                            id="outlined-basic"
                            label="Password..."
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.velue)}
                        />
                        <label style={{color:"white"}}><input type="checkbox" />Remember me</label>
                        <Button style={{ color: "white", padding: "10px 35px", background: "#FA9021",margin:"10px 0px 50px" }} variant="outlined" type='submit'>Get in touch</Button>
                    </form>
                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        message="You Added Course"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;