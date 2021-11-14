import { useState, useEffect } from 'react';
import { query } from '../api/lessonApi';
import { Lesson } from '../interfaces/LessonInterface';

export const useLesson = ( ) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ lessonList, setLessonList ] = useState<Lesson[]>({} as Lesson[])

    const loadLesson = async() => {
        const result = await query;
        setLessonList(result.data.items);
        setIsLoading(false);
    }

    useEffect(() => {
        loadLesson();
    }, [])

    return {
        isLoading,
        lessonList
    }
}
