//리스트를 랜더링하는 컴포넌트
import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(
          (
            it //dummyList의 하나의 객체가 it로 넘어옴
          ) => (
            <DiaryItem key={it.id} {...it} />
          )
        )}
      </div>
    </div>
  );
};

//undefined로 전달될 수 있는 값들의 기본값을 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
