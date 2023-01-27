import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return(
      <div className={s.dialogs}>
          <div className={s.dialogItem}>
              <div className={s.dialog + ' ' + s.active}>
                  Max
              </div>
              <div className={s.dialog}>
                  Masha
              </div>
              <div className={s.dialog}>
                  Dasha
              </div>
              <div className={s.dialog}>
                  Katya
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