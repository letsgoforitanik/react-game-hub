import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
    limit: number;
}

export default function ExpandableText({ children, limit }: Props) {
    const [showMore, setShowMore] = useState(false);

    if (children.length <= limit) return <Text>{children}</Text>;

    const summary = children.substring(0, limit) + "...";

    return (
        <Text>
            {showMore ? children : summary}
            <Button
                size="xs"
                fontWeight="bold"
                colorScheme="yellow"
                marginLeft={1}
                onClick={() => setShowMore((current) => !current)}
            >
                {showMore ? "Show Less" : "Read More"}
            </Button>
        </Text>
    );
}
