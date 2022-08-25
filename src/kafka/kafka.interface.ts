import { HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export interface IKafkaMessageHeader {
    user?: string;
}

export interface IKafkaProducerMessageOptions {
    headers?: IKafkaMessageHeader;
}

export interface IKafkaProducerSendMessageOptions
    extends IKafkaProducerMessageOptions {
    raw?: boolean;
}

export interface IKafkaMessage<T = Record<string, string>> {
    key: string;
    value: T;
    headers?: IKafkaMessageHeader;
}

export interface IKafkaErrorException {
    statusCode: number;
    message: string;
    errors: ValidationError;
    statusHttp: HttpStatus;
}
