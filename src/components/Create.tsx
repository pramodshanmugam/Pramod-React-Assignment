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
    Assignee:number;
    Labels:string;
    Reporter:string;
    Sprint:string;
    Description:string;
    Storypoint:string;
    Attachment:string;

};

function Create(){
    const {register,handleSubmit} = useForm<create>()


     const onCLick = handleSubmit(async (data) => {
        console.log(data);
        try {
          const response = await fetch('http://localhost:8000/api/v1/issues/', {
            method: 'POST',
            body: JSON.stringify({
              short_id: 'John Smith',
              title: data.Title,
              description: data.Description,
              priority: data.Priority,
              status: data.Status,
              created_by: 1,
              assignee: data.Assignee,
              resolution:data.Resolution,
              affectedversion:data.AffectedVersion,
              fixversion:data.FixVersion,
              components:data.Components,
              lables:data.Labels,
              reporter:data.Reporter,
              sprint:data.Sprint,
              type:data.Type,
              storypoint:data.Storypoint,
              attachment:data.Attachment

            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
    
          const result = await response.json();
    
          console.log('result is: ', JSON.stringify(result, null, 4));
    
        } catch (err) {
            console.log("Failure")
        }
      });
    return(
        <form className='createform'>
            <div>
                <label htmlFor="Title:">Title</label>
                <input className="textbox" id="textbox" type="text" {...register("Title")}/>
            </div>
            <div>
                <label htmlFor="Type">Type </label>
                <input className='textbox'id="Type"  type="text" {...register("Title")}/>
            </div>

            <div>
                <label htmlFor="Status">Status</label>
                <input className='textbox'id="Status" type="text" {...register("Status")}/>
            </div>
            <div>
                <label htmlFor="Priority">Priority</label>
                <input className='textbox'id="Priority"  type="text" {...register("Priority")}/>
            </div>
            <div>
                <label htmlFor="Resolution">Resolution</label>
                <input className='textbox'id="Resolution"  type="text" {...register("Resolution")}/>
            </div>
            <div>
                <label htmlFor="AffectedVersion">Affected-Version</label>
                <input className='textbox'id="AffectedVersion" type="text" {...register("AffectedVersion")}/>
            </div>
            <div>
                <label htmlFor="FixVersion">Fix-Version</label>
                <input className='textbox'id="FixVersion" type="text" {...register("FixVersion")}/>
            </div>

            <div>
                <label htmlFor="Components">Components/s</label>
                <input className='textbox'id="Components"  type="text" {...register("Components")}/>
            </div>
            <div>
                <label htmlFor="Assignee">Assignee</label>
                <input className='textbox'id="Assignee"  type="text" {...register("Assignee")}/>
            </div>
            <div>
                <label htmlFor="Labels">Labels</label>
                <input className='textbox'id="Labels"  type="text"{...register("Labels")}/>
            </div>
            <div>
                <label htmlFor="Reporter">Reporter</label>
                <input className='textbox'id="Reporter"  type="text" {...register("Reporter")}/>
            </div>
            <div>
                <label htmlFor="Sprint">Sprint</label>
                <input className='textbox'id="Sprint"  type="text" {...register("Sprint")}/>
            </div>
            <div>
                <label htmlFor="Description">Description</label>
                <input className='textbox'id="Description"  type="text"{...register("Description")}/>
            </div>
            
            <div>
                <label htmlFor="Storypoint">Storypoint</label>
                <input className='textbox'id="Storypoint" type="text"{...register("Storypoint")}/>
            </div>
            <div>
                <label htmlFor="Attachment">Attachment</label>
                <input className='textbox'id="Attachment"  type="text" {...register("Attachment")}/>
            </div>
            
            <button className='submitbutton' onClick={onCLick} type='button'>Submit</button>
            


        </form>



    )



}

export default Create;



