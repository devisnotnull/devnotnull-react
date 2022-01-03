import React, { FC } from 'react';
import classnames from 'classnames';

import { IMetadataPayload } from '../../../models/metadata';

import styles from './about.css';

import commonStyles from '../../style/common.css';

interface StateProps {
  metadata: IMetadataPayload;
}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const Profile: FC<Props> = ({ metadata }) => (
  <>
    <div className={classnames(styles['Header'])}>
      <div className={classnames(styles['Header--Photo'])}>
        <img
          src="//fandanzle-pure-ui-production.s3.eu-west-2.amazonaws.com/media/avatar.png"
          alt="avatar"
        />
      </div>
      <div className={classnames(styles['Text--Header'])}>
        <h1>
          Hi <span className={styles['Header--Wave']}>👋</span>, My name is Alex
          and im a developer
        </h1>
        <p>
          With a passion for web development, security, networking and
          microservices.
        </p>
      </div>
    </div>
    <div className={classnames(commonStyles['Block'])}>
      <h2>About me</h2>
      <p>{metadata.summary}</p>
    </div>
  </>
);

export default Profile;
