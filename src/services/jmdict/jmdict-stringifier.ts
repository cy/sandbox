import * as fs from 'fs';

export abstract class JMDictStringifier {
    public static export(filename: string, dictionary: any) {
        if (dictionary == null) {
            return;
        }

        fs.open(filename, 'w', (err, fd) => {
            let counter = 0;
            for (const entry of dictionary.entry) {
                if(entry) {
                  fs.write(fd, `{ "index" : { "_index" : "jmdict", "_type" : "doc", "_id" : "${counter}" } }\n${JSON.stringify(entry)}\n`, () => {});
                  counter++;
                  //if(counter === 100) {
                    //break
                  //}
                }
            }
        });
    }
}
