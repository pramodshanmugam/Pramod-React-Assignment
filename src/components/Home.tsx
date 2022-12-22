import React from 'react'
import { useForm } from 'react-hook-form';

type issue = {
    id: number;
    created_at: string;
    updated_at: string;
    short_id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    created_by: number;
    assignee: number;
  };
  



function Home(){

    let issues: any[] = [];

     const onCLick = (async () => {
        try {
          const response = await fetch('http://localhost:8000/api/v1/issues/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }})
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
    
          return await response.json();
    
          console.log('result is: ', JSON.stringify(issues, null, 4));
    
        } catch (err) {
            console.log("Failure")
        }
      })().then( function response(issues) {

        return(

            <table>
                <thead>
                    <tr>
                        Issues - {issues.length}
                    </tr>
                </thead>
                <tbody>
                    {
                        issues.length > 0 && issues.map((iss: issue) => (
                            <tr>
                                <td>
                                    {iss.short_id}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
    
            </table>
        )})

        return(<table></table>)

    
}

export default Home;