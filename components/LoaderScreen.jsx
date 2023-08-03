import Image from 'next/image';

const LoaderScreen = () => {
  return <div className='fixed inset-0 flex items-center justify-center'>
    <Image
      src='/loader.gif'
      alt='loader'
      className= 'max-w-full max-h-full rounded-full scale-100'
    />
  </div>
}

export default LoaderScreen;
