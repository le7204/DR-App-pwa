import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import ToggleButton from 'react-bootstrap/ToggleButtonGroup';
import { Button, ButtonGroup } from 'react-bootstrap';
import Loading from '../utility/Loading';
import "./SalesItemsList.css";
import { useNavigate } from 'react-router';
const SalesItemsList = () => {
  const [state, setState] = useState({
    salesItems: false
  });
  const nav = useNavigate();
  useEffect(() => {
    const url = "https://api-us-east-1.graphcms.com/v2/ckug8eplp925x01zedvmx1k2t/master";
    const client = new GraphQLClient(url, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzM2NTYyMjcsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdWc4ZXBscDkyNXgwMXplZHZteDFrMnQvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2VlN2VlNDAtOTc3NS00ZDQ2LTgzODUtNzY4YTQ2MzMyNmNmIiwianRpIjoiY2t1aG9xa2tzMG5taTAxeHAxZ2JkNmtmNiJ9.pef7CsUP5FsLrDMNzAZghRQsH6KOlLBaMJyE_xwciFVbEJxBhQvT6J3IK77JSnDIDa6SGlpF9NminMb8_uF49yu2v5txneGIJ50BxXfAdnCkExbX6DBeJJrWgLpISW1d3uKz_w1_UQRQoAZuW_sR9Y9wAxUhpPnk_w0vLXvPP4VIubYHsFBC2ULeY5mXAAHJeEmYXhGcsj4WAWcMGzSkXHh__CmnvjVOEtARJ-0MPTy4v5yMW-X2GAckDBf7HB4hp2WFwIvYVFjpNtEIH53HnBl5BAtaOzo9b1rwfH38jPc5M7ED9Ud9wGypzqhl_Rc0kTJP5jt8G2tbs91xkmQcO_fLTOORJkrEm9dagkoYEL1PJ8g29tYHJxUI2DJUhchnuk5kLZgE2pZqJ7JSa1tqshs-do0E5NiPFUKjVkpX4WuRCHZbLe_aiVv_7-P0lTiC9qqyWObDgwsSf1ov-XkDBR95WQ3vnjje_jbIgmDD9FgT-JW09rqIC7AnXRRNxUS76-6oQU_wCw-YVs_-1Jq6q9LZyZpk35yJZA7nfsGJhZFGsg4KUbdiMJDFmjuE55jaMFOqeVabWW0UoCPp0OsIpSk6V-L-HhITo6ar9us8i9DH82YKbsY7a9qFJ0Y2YAVJo7eECwG4YU9oMmOVNtRdFw0gYL7SP5K1qkRYTsMD8ok"
      }
    });
    const getSalesItemList = gql`{
      salesItems {
        name
        thumbnail {
          height
          url
          width
        }
      }
    }`;
    try {
      client.request(getSalesItemList).then((data) => {
        console.log(data.salesItems);
        setState({ salesItems: [...data.salesItems], loaded: true });
      });
    } catch (err) {
      console.error('call to cms for sales items failed:', err);
    }
  }, []);

  const navigate = (salesItem) => {
    console.log("navigating:", salesItem);
    nav(`/salesitem/${salesItem}`);
  };
  return (
    <div className="sales-item-list" style={{ height: '100vh' }}>
      {!state.salesItems && <Loading />}
      {state.salesItems && state.salesItems.map((element, i) => {
        // console.log(element)
        return <button key={"item" + i} onClick={() => navigate(element.name)}><img style={{ height: "50%" }} src={element.thumbnail.url} /><div><text>{element.name}</text></div></button >;
      })
      }
    </div >
  );
};

export default SalesItemsList;
