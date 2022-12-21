import React from 'react';
import { useForm } from 'react-hook-form'
import './style.css';

type create={
    Title:string;
    Type:string;
    Status:string;
    Priority:string;
    Resolution:string;
    AffectedVersion:string;
    FixVersion:string;
    Components:string;
    Assignee:string;
    Labels:string;
    Reporter:string;
    Sprint:string;
    Description:string;
    Storypoint:string;
    Attachment:string;

};

function Create(){
    const {register,handleSubmit} = useForm<create>()

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })
    return(
        <form className='createform'onSubmit={onSubmit}>
            <div>
                <label htmlFor="Title:">Title</label>
                <input className="textbox" id="textbox" name="textbox" type="text"/>
            </div>
            <div>
                <label htmlFor="Type">Type </label>
                <input className='textbox'id="Type" name="Type" type="text"/>
            </div>

            <div>
                <label htmlFor="Status">Status</label>
                <input className='textbox'id="Status" name="Status" type="text"/>
            </div>
            <div>
                <label htmlFor="Priority">Priority</label>
                <input className='textbox'id="Priority" name="Priority" type="text"/>
            </div>
            <div>
                <label htmlFor="Resolution">Resolution</label>
                <input className='textbox'id="Resolution" name="Resolution" type="text"/>
            </div>
            <div>
                <label htmlFor="AffectedVersion">Affected-Version</label>
                <input className='textbox'id="AffectedVersion" name="AffectedVersion" type="text"/>
            </div>
            <div>
                <label htmlFor="FixVersion">Fix-Version</label>
                <input className='textbox'id="FixVersion" name="FixVersion" type="text"/>
            </div>

            <div>
                <label htmlFor="Components">Components/s</label>
                <input className='textbox'id="Components" name="Components" type="text"/>
            </div>
            <div>
                <label htmlFor="Assignee">Assignee</label>
                <input className='textbox'id="Assignee" name="Assignee" type="text"/>
            </div>
            <div>
                <label htmlFor="Labels">Labels</label>
                <input className='textbox'id="Labels" name="Labels" type="text"/>
            </div>
            <div>
                <label htmlFor="Reporter">Reporter</label>
                <input className='textbox'id="Reporter" name="Reporter" type="text"/>
            </div>
            <div>
                <label htmlFor="Sprint">Sprint</label>
                <input className='textbox'id="Sprint" name="Sprint" type="text"/>
            </div>
            <div>
                <label htmlFor="Description">Description</label>
                <input className='textbox'id="Description" name="Description" type="text"/>
            </div>
            
            <div>
                <label htmlFor="Storypoint">Storypoint</label>
                <input className='textbox'id="Storypoint" name="Storypoint" type="text"/>
            </div>
            <div>
                <label htmlFor="Attachment">Attachment</label>
                <input className='textbox'id="Attachment" name="Attachment" type="text"/>
            </div>
            
            <button className='submitbutton' type='submit'>Submit</button>
            


        </form>



    )



}

export default Create;



