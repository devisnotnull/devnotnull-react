import React, { FC } from 'react';
import classnames from 'classnames';

import { ICommonFields } from '../../../models/common';
import { IAbillityPayload } from '../../../models/abillity';

import styles from './skillz.css';
import commonStyles from '../../style/common.css';

export interface ISkillsValueProps {
  values: string[];
}

export const SkillzValue: FC<ISkillsValueProps> = ({ values }) => (
  <div>
    {values.map((item: string, index: number) => {
      return (
        <span key={index} className={styles['Skill--Badge']}>
          {item}
        </span>
      );
    })}
  </div>
);

interface ISkillzProps {
  abilitiesList: ICommonFields<IAbillityPayload>[];
}

type Props = ISkillzProps;

export const Skillz: FC<Props> = ({ abilitiesList }) => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>Skills</h2>
    {abilitiesList.map(
      (item: ICommonFields<IAbillityPayload>, index: number) => {
        return (
          <div key={index} className={styles['Item--Skills']}>
            <div className={styles['Skill']}>{item.fields.subject}</div>
            <SkillzValue values={item.fields.skills} />
          </div>
        );
      }
    )}
  </div>
);

export default Skillz;
