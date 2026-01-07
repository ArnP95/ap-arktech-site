import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ArchitectureSite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light tracking-wide"
        >
          Arkkitehtitoimisto
        </motion.h1>
        <p className="mt-6 max-w-xl text-neutral-400">
          Ajattomia, kestäviä ja harkittuja tiloja nykyaikaiseen elämään.
        </p>
        <Button className="mt-10">Tutustu töihin</Button>
      </section>

      {/* Projektit */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-12 font-light">Projektit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-neutral-900 border-neutral-800">
              <CardContent className="p-0">
                <div className="h-64 bg-neutral-800 flex items-center justify-center text-neutral-500">
                  Kuva {i}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light">Projekti {i}</h3>
                  <p className="text-sm text-neutral-400 mt-2">
                    Lyhyt kuvaus arkkitehtuuriprojektista.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tietoa */}
      <section className="py-24 px-8 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6">Tietoa meistä</h2>
          <p className="text-neutral-400 leading-relaxed">
            Olemme arkkitehtitoimisto, joka keskittyy laadukkaaseen
            suunnitteluun, kestävyyteen ja selkeään estetiikkaan.
          </p>
        </div>
      </section>

      {/* Yhteystiedot */}
      <footer className="py-16 px-8 text-center text-neutral-500">
        <p>© 2026 Arkkitehtitoimisto</p>
        <p className="mt-2">info@arkkitehti.fi</p>
      </footer>
    </div>
  );
}
