import React, { FC } from 'react';
import classnames from 'classnames';

import commonStyles from '../../style/common.css';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const Folio: FC<Props> = () => (
  <div className={classnames(commonStyles['Block'])}>
    <h2>Portfolio</h2>
  </div>
);

export default Folio;
