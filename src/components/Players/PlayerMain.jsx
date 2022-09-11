import { useEffect } from 'react';

const userObserver = '';
const PlayerMain = (props) => {
    let playerData = props.playerData.full || false;

    let content = <></>;
    if (playerData.char1) {//there is a character for this user
        if (!playerData.char2) {//only one character currently for this user
            content = (
                <div>
                    {playerData.char1.name && <button onClick={() => props.setSelectedCharacter(playerData.char1)}>{playerData.char1.name}</button>}
                    <button>Create A Second Character!</button>
                </div>
            );
        } else {//there is at least two characters for this user
            if (!playerData.char3) {
                content = (
                    <div>
                        {playerData.char1.name && <button onClick={() => props.setSelectedCharacter(playerData.char1)}>{playerData.char1.name}</button>}
                        {playerData.char2.name && <button onClick={() => props.setSelectedCharacter(playerData.char2)}>{playerData.char2.name}</button>}
                        <button>Create A Third Character!</button>
                    </div>
                );
            } else {
                content = (
                    <div>
                        {playerData.char1.name && <button onClick={() => props.setSelectedCharacter(playerData.char1)}>{playerData.char1.name}</button>}
                        {playerData.char2.name && <button onClick={() => props.setSelectedCharacter(playerData.char2)}>{playerData.char2.name}</button>}
                        {playerData.char3.name && <button onClick={() => props.setSelectedCharacter(playerData.char3)}>{playerData.char3.name}</button>}
                    </div>
                );
            }
        }

    } else {//they need to make their first one
        content = (
            <div><button>Create Your First Character!</button></div>
        );
    }
    if (props.playerData.selected) {
        //TODO:show the selected character stats
    }
    return content;


};
export default PlayerMain;