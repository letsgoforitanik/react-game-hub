import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Skeleton width="400px" height="266px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}
