import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async ({ params, searchParams }: SearchParamProps) => {
  const { userId } = await params;
  const { appointmentId } = await searchParams;

  const appointment = await getAppointment(appointmentId as string);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/images/logo-flugo-branco.png"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />

          <h2 className="header mb-6 max-w-[600px] text-center">
            Sua{" "}
            <span className="text-green-500">solicitação de agendamento</span>{" "}
            foi enviada com sucesso!
          </h2>
          <p className="">Entraremos em contato em breve para confirmar.</p>
        </section>

        <section className="request-details">
          <p className="Requested appointment details:">
            Detalhes da consulta solicitada:
          </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-10"
            />
            <p className="whitespace-nowrap"> Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
                src="/assets/icons/calendar.svg"
                height={24}
                width={24}
                alt="calendar"
            />
            <p className="">
                {formatDateTime(appointment.schedule).dateTime}
            </p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn">
            <Link href={`/patients/${userId}/new-appointment`}>
                Nova solicitação de consulta
            </Link>
        </Button>

        <p className="copyright">
            © 2025 Flugo Care
        </p>
      </div>
    </div>
  );
};

export default Success;
