import { useEffect } from 'react';
import { fireStoreDb } from '../auth/firebase';

const PlayerMain = (props) => {
    const charName = fireStoreDb.collection('characters').doc('characterName');
    const observer = charName.onSnapshot(docSnapshot => {
        console.log(`Received charName snapshot: ${JSON.stringify(docSnapshot)}`);
        // ...
    }, err => {
        console.log(`Encountered error: ${err}`);
    });

    return (
        <div>
            <h1>PlayerMain</h1>
            <h1>{props.user.displayName}</h1>
            <h1>{props.user.email}</h1>
            <h1>{props.user.uid}</h1>

            {/* <CharacterCards character={props.user.characters} /> */}
        </div>
    );
};
export default PlayerMain;