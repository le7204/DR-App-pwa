import React, { Component, useEffect, useState } from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import './Sidebar.css';
import { useNavigate } from 'react-router';

const Sidebar = (props) => {
    const [state, setState] = useState({});
    const nav = useNavigate();
    useEffect(() => {
        const url = "https://api-us-east-1.graphcms.com/v2/ckug8eplp925x01zedvmx1k2t/master";
        const client = new GraphQLClient(url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzM2NTYyMjcsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdWc4ZXBscDkyNXgwMXplZHZteDFrMnQvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2VlN2VlNDAtOTc3NS00ZDQ2LTgzODUtNzY4YTQ2MzMyNmNmIiwianRpIjoiY2t1aG9xa2tzMG5taTAxeHAxZ2JkNmtmNiJ9.pef7CsUP5FsLrDMNzAZghRQsH6KOlLBaMJyE_xwciFVbEJxBhQvT6J3IK77JSnDIDa6SGlpF9NminMb8_uF49yu2v5txneGIJ50BxXfAdnCkExbX6DBeJJrWgLpISW1d3uKz_w1_UQRQoAZuW_sR9Y9wAxUhpPnk_w0vLXvPP4VIubYHsFBC2ULeY5mXAAHJeEmYXhGcsj4WAWcMGzSkXHh__CmnvjVOEtARJ-0MPTy4v5yMW-X2GAckDBf7HB4hp2WFwIvYVFjpNtEIH53HnBl5BAtaOzo9b1rwfH38jPc5M7ED9Ud9wGypzqhl_Rc0kTJP5jt8G2tbs91xkmQcO_fLTOORJkrEm9dagkoYEL1PJ8g29tYHJxUI2DJUhchnuk5kLZgE2pZqJ7JSa1tqshs-do0E5NiPFUKjVkpX4WuRCHZbLe_aiVv_7-P0lTiC9qqyWObDgwsSf1ov-XkDBR95WQ3vnjje_jbIgmDD9FgT-JW09rqIC7AnXRRNxUS76-6oQU_wCw-YVs_-1Jq6q9LZyZpk35yJZA7nfsGJhZFGsg4KUbdiMJDFmjuE55jaMFOqeVabWW0UoCPp0OsIpSk6V-L-HhITo6ar9us8i9DH82YKbsY7a9qFJ0Y2YAVJo7eECwG4YU9oMmOVNtRdFw0gYL7SP5K1qkRYTsMD8ok"
            }
        });
        const getitemCategories = gql`{
            itemCategories {
              name
              thumbnail{url}
            }
          }`;
        try {
            client.request(getitemCategories).then((data) => {
                // console.log(data.itemCategories);
                setState({ itemCategories: [...data.itemCategories], loaded: true });
            });
        } catch (err) {
            console.error('call to cms for crew items failed:', err);
        }
    }, []);
    async function navigate(name) {
        // props.arrowClick();
        nav(name);
        //if the screen is less than 700px wide shrink sidebar
        if (window.top.outerWidth < 700) {
            props.arrowClick();
        }
    }

    return (props.open ? (
        <div className='sidebar-open'>
            <button onClick={props.arrowClick}> {'<--'} </button>

            {state.itemCategories && state.itemCategories.map((element, i) => {
                // console.log(element);
                return <button key={"category " + i} className='nav-button' onClick={() => navigate(element.name)} > {element.name}</button>;
            })
            }
        </div >
    ) :
        (
            <div className='sidebar-closed'>
                <button id='side-bar-open-button' onClick={props.arrowClick}> {'N\na\nv\ni\ng\na\nt\ne\n>'} </button>

            </div >
        )
    );

};
export default Sidebar;
