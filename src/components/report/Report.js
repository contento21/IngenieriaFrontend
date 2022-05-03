import React, { useEffect, useState } from 'react'
import axios from "axios";

const Report = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("Cuando carg");

        axios.get("http://localhost:6969/Users")
                .then(res => {
                    console.log(res)
                    setUsers(res.data)
                }).catch(() => {
                    alert("Ha ocurrido un error consultando usuarios");
                })


    }, []);

    console.log(users);

    return (
        <>
            <h1>Lista de usuarios</h1>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Correo</th>
                </thead>
                <tbody>
                    {users.forEach((user) => {
                        console.log(user);
                        return(
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Report;
