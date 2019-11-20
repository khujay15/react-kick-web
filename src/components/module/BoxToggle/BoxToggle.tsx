import color from '@/theme/color';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BoxToggle = (state: number, myNumber: number): any => {
  const styleTag = {
    display: 'flex',
    flexDirection: 'row',
    color: color.grey,
    fontSize: '15px',
    justifyContent: 'space-between',
    width: '100%',
    height: '4vh',
    alignItems: 'center',
    cursor: 'pointer',
  };
  if (state !== myNumber) return styleTag;
  else {
    return {
      ...styleTag,
      borderBottom: `1px solid ${color.oboon}`,
    };
  }
};

export default BoxToggle;
