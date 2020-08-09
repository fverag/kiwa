import crypto from 'crypto';

const hasher = (input: string): string => {
  return crypto.createHash('sha256').update(input, 'utf8').digest('hex');
};

export default hasher;
