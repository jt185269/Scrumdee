import ReactStickyNotes from "@react-latest-ui/react-sticky-notes/src";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

async function  getCats() {
    console.log("getting cats")
    let options= {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    const res = await fetch('http://localhost:5000/retro/categories', options)
    return res.json();
}

const RetroItem = ({cat}) => {
    return (
        <div>
            <p>
                <h3>{cat.category}</h3>
            </p>
            <ReactStickyNotes/>
        </div>
    )
}

export const Retro = ({users, user}) => {
    const [categories, setCategories] = useState(null)
    const [category, setCategory] = useState("")
    console.log(categories)
    if (categories === null) {
        getCats().then( (res) => {
                setCategories(res)
            }
        );
    }

    const onSubmit = (e) => {
        e.preventDefault()
        async function addCat() {
            let options= {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({category})
            }
            const res = await fetch('http://localhost:5000/retro/categories', options)
            return res.json();
        }
        addCat().then(res => {
            setCategories(res)
        })

    }
    return (
        <>
            {user.admin && <Form>
                <Form.Group>
                    <Form.Label>Add new Category</Form.Label>
                    <Form.Control onChange={(e) => setCategory(e.target.value)} value={category} type="text"/>
                </Form.Group>
                <Button onClick={onSubmit} type='submit'>Add category!</Button>
            </Form>}
            <div className={"retro"}>
                {!user.admin && categories && categories.map(cat => {
                    return <RetroItem cat={cat} className={"retro-item"} />
                })}
            </div>
        </>
    )
}