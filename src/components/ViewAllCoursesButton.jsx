'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function ViewAllCoursesButton() {
    const router = useRouter();

    return (
        <Button onClick={() => router.push("/courses")}>View All</Button>
    )
}