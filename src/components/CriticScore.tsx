import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

export default function CriticScore({ score }: Props) {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

    return (
        <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius="4px">
            {score}
        </Badge>
    );
}
