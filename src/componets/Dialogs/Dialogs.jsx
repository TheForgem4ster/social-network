import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return(
      <div className={s.dialogs}>
          <div className={s.dialogItem}>
              <div className={s.dialog + ' ' + s.active}>
                  <NavLink to="/dialogs/1">Max</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to="/dialogs/2">Masha</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to="/dialogs/3">Dasha</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to="/dialogs/4">Katya</NavLink>
              </div>
          </div>
          <div className={s.messages}>
              <div className={s.message}>Hi are you?</div>
              <div className={s.message}>I fun</div>
              <div className={s.message}>Good</div>
          </div>
      </div>
    );
}

export default Dialogs;