<?php

use JetBrains\PhpStorm\ArrayShape;

class Email
{


    public function __construct(
        private string $to,
        private string $from,
        private string $subject,
        private string $body
    )
    {}


    #[ArrayShape(["to" => "string", "from" => "string", "subject" => "string", "body" => "string"])] public function jsonSerialize()
    {
        return [
            "to" => $this->to,
            "from" => $this->from,
            "subject" => $this->subject,
            "body" => $this->body
        ];
    }
}