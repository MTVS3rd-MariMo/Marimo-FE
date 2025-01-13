import Menu from './pages/Menu';
import About from './pages/About';
import Counter from './components/Counter';

import CourseCard from './components/CourseCard';

import { useState } from 'react';

export default function App() {

  const [value, setValue] = useState(0);

  return (
    <>
      <div>

        <CourseCard
          img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/221020_172526/%E1%84%8F%E1%85%A9%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3_%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC_PC.png"
          tags={['발표', '패키지', '최대할인']}
          title="비즈니스 올인원, 방구석 어학연수 패키지"
          startPrice={349000}
          types={['동영상강의']}
        />
      </div>
      <Counter/>
    </>
  );
}