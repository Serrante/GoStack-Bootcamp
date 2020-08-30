import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableCheck
} from "typeorm";

export default class CreateTransactions1598727624836 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'transactions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'title',
              type: 'varchar',
            },
            {
              name: 'value',
              type: 'decimal',
              precision: 10,
              scale: 2
            },
            {
              name: 'type',
              type: 'varchar',
            },
            {
              name: 'category_id',
              type: 'uuid',
              isNullable: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );

      await queryRunner.createForeignKey(
        'transactions',
        new TableForeignKey({
          name: 'TransactionCategory',
          columnNames: ['category_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

      await queryRunner.createCheckConstraint(
        'transactions',
        new TableCheck({
          name: 'CheckType',
          expression: "type = 'income' OR type = 'outcome'",
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transactions');
    }
}
