import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Add() {
    const [search, setsearch] = useState('')
    const [sort, setsort] = useState('')


    const [product, setproduct] = useState([])
    const alldata = async () => {
        const res = await axios('http://localhost:3000')
        const data = res.data.data
        setproduct(data)
    }
    useEffect(() => {
        alldata()

    }, [])

    ////
    const postdata = async (data) => {
        await axios.post('http://localhost:3000', data)
        alldata()
    }
    const deldata = async (id) => {
        await axios.delete(`http://localhost:3000/${id}`,)
        alldata()
    }

    return (
        <div id='add'>
            <Helmet>
                <title>
                    Add
                </title>
            </Helmet>

            <div id='add'>
                <div className="form">
                    <Formik
                        initialValues={{ name: '', src: '', price: '' }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Required'),
                            src: Yup.string()
                                .required('Required'),
                            price: Yup.number().required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            postdata(values)
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                resetForm()
                            }, 400);
                        }}
                    >
                        <Form className='for'>
                            <label htmlFor="name"> Name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" />

                            <label htmlFor="src">img src</label>
                            <Field name="src" type="text" />
                            <ErrorMessage name="src" />

                            <label htmlFor="price">price</label>
                            <Field name="price" type="number" min={1} />
                            <ErrorMessage name="price" />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
                <div className="inputbox">
                    <label htmlFor="">search</label>
                    <input type="text" onChange={(e)=>setsearch(e.target.value)} />
                </div>
                <div className="butons">
                    <button onClick={()=>setsort({prop:'name',asc:true})}>a-z</button>
                    <button onClick={()=>setsort({prop:'name',asc:false})}>z-a</button>
                    <button onClick={()=>setsort({prop:'price',asc:true})}>artan</button>
                    <button onClick={()=>setsort({prop:'price',asc:false})}>azalan</button>
                    <button onClick={()=>setsort(null)}>default</button>
                </div>
                <div className="table">
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>img</th>
                                <th>price</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product && product
                            .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
                            .sort((a,b) => {
                                if (sort && sort.asc===true) {
                                    return (a[sort.prop] > b[sort.prop]) ? 1 : ((b[sort.prop] > a[sort.prop]) ? -1 : 0)
                                }
                                if (sort && sort.asc===false) {
                                    return (a[sort.prop] < b[sort.prop]) ? 1 : ((b[sort.prop] < a[sort.prop]) ? -1 : 0)
                                }
                                else{
                                    null
                                }
                            }
               
                            )
                            .map((item) => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td><img src={item.src} alt="" /></td>
                                    <td>{item.price}</td>
                                    <td onClick={() => deldata(item._id)}>delete</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Add