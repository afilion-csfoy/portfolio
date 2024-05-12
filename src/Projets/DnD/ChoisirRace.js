import React from "react";
import Table from 'react-bootstrap/Table';

export function ChoisirRace({ surDefinirRace }) {
    return (
      <>
        <h1>Choisir votre race</h1>
        <p>Cliquez sur l'image</p>
        <Table bordered size="sm" >
          <thead>
            <tr>
              <td align="center">Nain</td>
              <td align="center">Humain</td>
              <td align="center">Elfe</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">
                <img 
                  src="/nain.jpg" 
                  height="200" alt="nain" 
                  onClick={() => surDefinirRace('nain')} 
                />
              </td>
              <td align="center">
                <img 
                  src="/humain.jpg" 
                  height="300" alt="humain"
                  onClick={() => surDefinirRace('humain')} 
                />
              </td>
              <td align="center">
                <img 
                  src="/elfe.jpg" 
                  height="250" alt="elfe"
                  onClick={() => surDefinirRace('elfe')} 
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }