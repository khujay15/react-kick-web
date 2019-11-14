import React from 'react';
import * as s from './AlertModal.styled';
import useModal from '@/store/ModalReducer';

interface AlertModalProps {
  children?: React.ReactNode;
}

const AlertModal: React.FC<AlertModalProps> = (props: AlertModalProps) => {
  const { ModalInfo, ModalClose } = useModal();
  let body;
  let bottomText;
  if (ModalInfo.modalType === 'License') {
    body = (
      <div>
        <img
          src="/images/modals/LicensePopup@3x.png"
          alt={'license_image'}
          style={{
            width: 'auto',
            height: 'auto',
          }}
        />
        <p>면허증을 등록해주세요</p>
      </div>
    );
  } else if (ModalInfo.modalType === 'Point') {
    body = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '30vh',
          marginTop: '2vh',
        }}
      >
        <img
          src="/images/modals/UnpaidPopup@3x.png"
          alt={'Point_image'}
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
          }}
        />
        <div
          style={{
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          포인트를 충전해주세요.
        </div>
      </div>
    );
    bottomText = '충전하기';
  }
  return ModalInfo.open ? (
    <s.modalBackGround>
      <s.modal>
        <s.modalInside>{body}</s.modalInside>

        <s.button onClick={ModalClose}>{bottomText}</s.button>
      </s.modal>
    </s.modalBackGround>
  ) : null;
};
export default AlertModal;
