import React from 'react';
import './style.css';

function Create(){
    return(
        <form>
            <div>
                <label htmlFor="Title:">First Name</label>
                <input className='Title'id="Title" name="Title" type="text"/>
            </div>
            <div>
                <label htmlFor="Type">Type </label>
                <input className='Type'id="Tyoe" name="Type" type="text"/>
            </div>

            <div>
                <label htmlFor="Status">Status</label>
                <input className='Status'id="Status" name="Status" type="text"/>
            </div>
            <div>
                <label htmlFor="Priority">Priority</label>
                <input className='Priority'id="Priority" name="Priority" type="text"/>
            </div>
            <div>
                <label htmlFor="Resolution">Resolution</label>
                <input className='Resolution'id="Resolution" name="Resolution" type="text"/>
            </div>
            <div>
                <label htmlFor="Affected-Version">Affected-Version</label>
                <input className='Affected-Version'id="Affected-Version" name="Affected-Version" type="text"/>
            </div>
            <div>
                <label htmlFor="Fix-Version">Fix-Version</label>
                <input className='Fix-Version'id="Fix-Version" name="Fix-Version" type="text"/>
            </div>

            <div>
                <label htmlFor="Components/s:">Components/s</label>
                <input className='Components/s'id="Components/s" name="Components/s" type="text"/>
            </div>
            <div>
                <label htmlFor="Assignee:">Assignee</label>
                <input className='Assignee'id="Assignee" name="Assignee" type="text"/>
            </div>
            <div>
                <label htmlFor="Labels:">Labels</label>
                <input className='Labels'id="Labels" name="Labels" type="text"/>
            </div>
            <div>
                <label htmlFor="Reporter:">Reporter</label>
                <input className='Reporter'id="Reporter" name="Reporter" type="text"/>
            </div>
            <div>
                <label htmlFor="Sprint:">Sprint</label>
                <input className='Sprint'id="Sprint" name="Sprint" type="text"/>
            </div>
            <div>
                <label htmlFor="Description:">Description</label>
                <input className='Description'id="Description" name="Description" type="text"/>
            </div>
            
            <div>
                <label htmlFor="Storypoint:">Storypoint</label>
                <input className='Storypoint'id="Storypoint" name="Storypoint" type="text"/>
            </div>
            <div>
                <label htmlFor="Attachment:">Attachment</label>
                <input className='Attachment'id="Attachment" name="Attachment" type="text"/>
            </div>
            <button className='submitbutton' type='submit'>Submit</button>


        </form>



    )



}

export default Create;