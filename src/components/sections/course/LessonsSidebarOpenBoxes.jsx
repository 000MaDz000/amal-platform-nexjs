'use client';
import LessonQuizBox from "@/components/lesson_quiz_box";
import OpenBox from "@/components/ui/open_box";
import LessonVideoSidebarOpenBox from "./LessonVideoSidebarOpenBox";

/**
 * @param {{lessons: import("@/types/static/global").Lesson[], course: import("@/types/static/global").Course}} param0
 */
export default function LessonsSidebarOpenBoxes({ lessons = [], course }) {

    return (
        <>
            {
                lessons?.map(lesson => lesson?.videos?.length ? (
                    <OpenBox title={lesson.name} openClassName="n" key={lesson.id}>
                        {lesson.videos.map(video => (
                            <LessonVideoSidebarOpenBox video={video} courseId={course.id} />
                        ))}
                    </OpenBox>
                ) : null)
            }

            <div className="w-full border-2 border-[#EAEAEA] py-3 px-4 shadow-sm">Quiz</div>


            {
                lessons?.map(lesson => lesson?.quizzes?.length ? (
                    <OpenBox title={lesson.name} openClassName="n" key={lesson.id}>
                        {lesson.quizzes.map(quize => (
                            <LessonQuizBox noProgress title={quize.name} unitName={"Q"} unitValue={quize.questions.length} url={quize.questions.length ? `/courses/${course.id}/quizes/${quize.id}` : undefined} />
                        ))}
                    </OpenBox>
                ) : null)
            }
        </>
    )
}