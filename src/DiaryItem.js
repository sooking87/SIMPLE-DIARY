import { useState, useRef } from "react";

const DiaryItem = ({ 
    onRemove, 
    onEdit,
    author, 
    content,
    created_date, 
    emotion, 
    id }) => {

    /* 데이터 리스트에서 데이터 삭제하기 */
    const handleRemove = () => {
        if (window.confirm(`${id}번 째 일기를 삭제하시겠습니까?`)) 
        onRemove(id); 
    }

    /* 데이터 리스트에서 데이터 수정하기 */
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(content);
    
    /* 수정 취소 버튼 */
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };
    
    /* 수정 완료 버튼 */
    const localContentInput = useRef(); //이거 왜 필요?
    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }
        if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`));
        onEdit(id, localContent);
        toggleIsEdit();
    }

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion} |
                </span>
                <br />
                <span className="date"> 
                    {new Date(created_date).toLocaleString()}
                </span>
                <div className="content">
                    {isEdit ? (
                        <>
                        <textarea 
                        value={localContent}
                        ref={localContentInput}
                        onChange={(e) => {
                            setLocalContent(e.target.value);
                        }}></textarea>
                        </>
                    ) : (
                        <>{content}</>
                    )
                    }  
                </div>
            </div>
            {isEdit ? <><button 
            onClick={handleQuitEdit}>수정 취소</button>
            <button 
            onClick={handleEdit}>수정 완료</button></> : <><button 
            onClick={handleRemove}>삭제하기</button>
            <button 
            onClick={toggleIsEdit}>수정하기</button></>}
            
        </div>
    );
};

export default DiaryItem;